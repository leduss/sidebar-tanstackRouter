import Title from '@/components/title';
import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/about').createRoute({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="p-2">
      <Title title="About" />
    </div>
  );
}
