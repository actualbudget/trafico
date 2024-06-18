import * as core from "@actions/core";
import { context, getOctokit } from "@actions/github";
import { Trafico } from "./lib/trafico.js";

async function runTrafico() {
  try {
    // Swap token to a getInput once we build for dist
    const token = process.env.GHTOKEN;
    const { owner, repo } = context.repo;
    const { rest } = getOctokit(token);
    const trafico = new Trafico(rest, { owner, repo });

    const pullRequest = await rest.pulls.get({
      owner,
      repo,
      pull_number: context.payload.pull_request.number
    });

    trafico.runTrafico(context, pullRequest.data, {});
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

runTrafico();
