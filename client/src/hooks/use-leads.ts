import { useMutation } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes"; // Assuming @shared/routes exports InsertLead type helper or similar
import { insertLeadSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Create a type alias if not directly exported from routes, strictly following schema
type LeadInput = z.infer<typeof insertLeadSchema>;

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: LeadInput) => {
      // Validate before sending (optional safety check)
      const validated = api.leads.create.input.parse(data);
      
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.leads.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit form. Please try again.");
      }

      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada. Entraremos em contato em breve.",
        className: "bg-green-500/10 border-green-500/20 text-green-500",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
