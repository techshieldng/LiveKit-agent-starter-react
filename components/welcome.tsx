import { CodeBlockIcon } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';

interface WelcomeProps {
  disabled: boolean;
  startButtonText: string;
  onStartCall: () => void;
}

export const Welcome = ({
  disabled,
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeProps) => {
  return (
    <div
      ref={ref}
      inert={disabled}
      className="fixed inset-0 z-10 mx-auto flex h-svh flex-col items-center justify-center text-center"
    >
      <CodeBlockIcon size={64} className="mx-auto mb-4" />
      <h1 className="font-semibold">VICTORIA 1.0</h1>
      <p className="text-muted-foreground max-w-prose pt-1 font-medium">
        Start a call to chat with Victoria.
        <br />
        Need help or have enquiries? Contact Voltcom Technologies LTD{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
          className="underline underline-offset-4"
        >
          +2348061502262
        </a>
        .
      </p>
      <Button variant="primary" size="lg" onClick={onStartCall} className="mt-12 w-64 font-mono">
        {startButtonText}
      </Button>
    </div>
  );
};
