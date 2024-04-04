export default function Home() {
  return (
    <main className="container w-full min-h-screen">
      <div className="flex flex-col text-xs p-5">
        <div className="bg-primary text-primary-foreground p-4">p</div>
        <div className="bg-secondary text-secondary-foreground p-4">s</div>
        <div className="bg-muted text-muted-foreground p-4">m</div>
        <div className="bg-background text-foreground p-4">b</div>
  
      </div>
    </main>
  );
}
