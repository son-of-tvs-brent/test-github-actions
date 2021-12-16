const { createGitExcludes } = require("./routines/createGitExcludes");

async function prerelease() {
  await createGitExcludes(['.npmrc']);
  await setNpmConfig();
}

module.exports = {
  prerelease
};
