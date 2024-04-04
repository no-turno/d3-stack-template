import { getGitCommitHash } from "./index.ts" with { type: "macro" };

console.log(`The current Git commit hash is ${getGitCommitHash()}`);
