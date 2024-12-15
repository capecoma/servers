import { z } from "zod";

// Base schemas for common types
export const GitHubAuthorSchema = z.object({
  name: z.string(),
  email: z.string(),
  date: z.string(),
});

// Content schema for file operations
const ContentSchema = z.object({
  encoding: z.string().describe("Encoding type (e.g., base64)"),
  content: z.string().describe("Actual content in the specified encoding")
});

const RepoParamsSchema = z.object({
  owner: z.string().describe("Repository owner (username or organization)"),
  repo: z.string().describe("Repository name"),
});

export const CreateOrUpdateFileSchema = RepoParamsSchema.extend({
  path: z.string().describe("Path where to create/update the file"),
  content: ContentSchema.describe("Content of the file with encoding info"),
  message: z.string().describe("Commit message"),
  branch: z.string().describe("Branch to create/update the file in"),
  sha: z
    .string()
    .optional()
    .describe("SHA of the file being replaced (required when updating existing files)"),
});

// Remaining imports and schemas remain the same...