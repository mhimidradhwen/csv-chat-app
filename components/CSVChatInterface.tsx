"use client";

import { useState } from "react";
import { FileSpreadsheet, Send, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function CSVChatInterface() {
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target?.result as string;
      const rows = text.split("\n").map(row => row.split(","));
      setCsvData(rows);
      setMessages([{
        role: "assistant",
        content: `I've loaded ${file.name}. The file contains ${rows.length} rows and ${rows[0]?.length} columns. How can I help you analyze this data?`
      }]);
    };

    reader.readAsText(file);
  };

  const handleSendMessage = () => {
    if (!input.trim() || !csvData.length) return;

    const newMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const response: Message = {
        role: "assistant",
        content: generateResponse(input, csvData)
      };
      setMessages(prev => [...prev, response]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (query: string, data: string[][]): string => {
    // This is a simple mock response. In a real application, you would implement
    // actual CSV data analysis based on the user's query
    const headers = data[0];
    const rowCount = data.length - 1;
    const columnCount = headers.length;

    if (query.toLowerCase().includes("summary")) {
      return `The CSV file has ${rowCount} rows and ${columnCount} columns. The columns are: ${headers.join(", ")}.`;
    }

    if (query.toLowerCase().includes("column")) {
      return `The available columns are: ${headers.join(", ")}`;
    }

    return `I can help you analyze this data. You can ask about:
    - File summary
    - Column names
    - Data patterns
    - Statistical analysis`;
  };

  return (
    <div className="grid gap-4">
      {!csvData.length ? (
        <Card className="p-8">
          <div className="flex flex-col items-center gap-4">
            <FileSpreadsheet className="h-12 w-12 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Upload your CSV file</h2>
            <p className="text-sm text-muted-foreground text-center">
              Upload a CSV file to start analyzing and chatting about your data
            </p>
            <label htmlFor="csv-upload">
              <Input
                id="csv-upload"
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button variant="outline" className="gap-2">
                <Upload className="h-4 w-4" />
                Choose File
              </Button>
            </label>
          </div>
        </Card>
      ) : (
        <div className="grid gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileSpreadsheet className="h-4 w-4" />
              <span>Currently analyzing: {fileName}</span>
            </div>
          </Card>

          <Card className="h-[600px] flex flex-col">
            <ScrollArea className="flex-1 p-4">
              <div className="grid gap-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex gap-2 rounded-lg p-4",
                      message.role === "assistant"
                        ? "bg-muted"
                        : "bg-primary text-primary-foreground ml-auto"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  placeholder="Ask about your CSV data..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading || !input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}