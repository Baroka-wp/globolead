import { Toast } from "@/components/ui/toast"

export function useToast() {
  return {
    toast: ({ title, description, variant }: { 
      title?: string;
      description?: string;
      variant?: "default" | "destructive";
    }) => {
      console.log('Toast:', { title, description, variant });
      // In a real implementation, this would show a toast notification
    }
  }
}