import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema } from "@/lib/leadSchema";
import { z } from "zod";
import { useCreateLead } from "@/hooks/use-leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";

type FormValues = z.infer<typeof insertLeadSchema>;

export function ContactForm() {
  const mutation = useCreateLead();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h3 className="text-2xl font-bold mb-6 text-white">Entre em Contato</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Nome Completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome" 
                    {...field} 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">E-mail</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="seu@email.com" 
                      type="email" 
                      {...field} 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Telefone / WhatsApp</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(00) 00000-0000" 
                      {...field} 
                      value={field.value || ''}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Como podemos ajudar?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Conte um pouco sobre sua necessidade..." 
                    {...field} 
                    value={field.value || ''}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 min-h-[120px] focus:border-primary/50 focus:ring-primary/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity rounded-xl"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
