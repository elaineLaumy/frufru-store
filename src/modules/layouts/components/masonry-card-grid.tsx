'use client';
import { MasonryGrid } from '@egjs/react-grid';

type MasonryCardGridProps = {
  children: React.ReactNode;
};

export function MasonryCardGrid({ children }: MasonryCardGridProps) {
  return (
    <MasonryGrid
      className="w-full flex justify-center p-0"
      gap={5}
      defaultDirection={'end'}
      align={'stretch'}
      column={2}
      columnSize={0}
      columnSizeRatio={0}
      onRenderComplete={(e) => {
        console.log(e);
      }}
    >
      {children}
    </MasonryGrid>
  );
}
