#!/usr/bin/env bun

await Bun.write(
  `./${process.env.CODEPARK_HOME}/codepark.config.toml`,
  JSON.stringify({})
);

export type {};
