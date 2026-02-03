import { useMutation } from "@tanstack/react-query";
import { insertLeadSchema } from "@/lib/leadSchema";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Use the client-side schema
type LeadInput = z.infer<typeof insertLeadSchema>;

const API_BASE = import.meta.env.VITE_API_URL || "";

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: LeadInput) => {
      // Validate before sending
      const validated = insertLeadSchema.parse(data);

      // If a backend is configured via VITE_API_URL, send there
      if (API_BASE) {
        const res = await fetch(`${API_BASE.replace(/\/$/, "")}/api/leads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(validated),
        });

        if (!res.ok) {
          let message = "Failed to submit form. Please try again.";
          try {
            const json = await res.json();
            message = json?.message || message;
          } catch {}
          throw new Error(message);
        }

        return await res.json();
      }

      // No backend configured: simulate success (frontend-only mode)
      return {
        id: Math.floor(Math.random() * 1000000),
        ...validated,
        createdAt: new Date().toISOString(),
      };
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada. Entraremos em contato em breve.",
        className: "bg-green-500/10 border-green-500/20 text-green-500",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        description: error?.message || String(error),
        variant: "destructive",
      });
    },
  });
}
