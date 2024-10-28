import CSVChatInterface from '@/components/CSVChatInterface';

export default function CSVChat() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">CSV Chat Assistant</h1>
          <p className="text-muted-foreground">Upload your CSV file and start a conversation about your data</p>
        </div>
        <CSVChatInterface />
      </div>
    </main>
  );
}