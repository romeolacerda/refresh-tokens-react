import { useAuth } from '@/hooks/useAuth';
import { LogOutIcon } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Button } from './ui/Button';
import { Tooltip } from './ui/Tooltip';

export function Appbar() {
  const { signedIn, signOut } = useAuth();

  return (
    <div className="fixed right-4 top-4 flex items-center gap-4">
      <ThemeSwitcher />

      {signedIn && <Tooltip content="Sair">
        <Button onClick={signOut} variant="secondary" size="icon" className="rounded-full">
          <LogOutIcon className='w4 h-4' />
        </Button>
      </Tooltip>}
    </div>

  );
}
