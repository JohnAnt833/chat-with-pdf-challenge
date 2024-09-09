"use server";
import { generateEmbeddingsInPineConeVectorStore } from "@/lib/langchain";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function generateEmbeddings(docId: string) {
  auth().protect(); //prevent users who not signed in, throws them back to the landing page

  // turn a PDF into embeddings [0.012244] turns pdf in to string of numbers... symualticy comparisons
  await generateEmbeddingsInPineConeVectorStore(docId);
  // pinecone stores ai embeddings (database) combine with langchain to interact with the api

  revalidatePath("/dashboard");

  return { completed: true };
}
