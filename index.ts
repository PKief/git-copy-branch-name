import { execSync } from "node:child_process";
import clipboardy from "clipboardy";

function getGitBranchName(): string {
  const branchName = execSync("git rev-parse --abbrev-ref HEAD")
    .toString()
    .trim();
  return branchName;
}

function copyBranchNameToClipboard(): void {
  const branchName = getGitBranchName();
  clipboardy.writeSync(branchName);
  console.log(`Copied branch name "${branchName}" to clipboard.`);
}

copyBranchNameToClipboard();
