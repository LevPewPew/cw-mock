import React from "react";
import Parrot from "../../shared-ui/parrot";

export default function Root() {
  return (
    <section>
      <div className="homepage-hero" style={{ margin: "5rem 0" }}>
        <img src="https://www.fillmurray.com/600/400" alt="house" />
      </div>
      <h1 className="cover-heading">Welcome to the micro-frontend world!</h1>
      <p className="lead">
        This is an example of how powerful micro-frontends can be!
        <br /> You may integrate any and all of your frontend apps.
      </p>
      <p className="lead">
        <a href="/about" className="btn btn-lg btn-secondary">
          Learn more.
        </a>
      </p>
      <Parrot />
    </section>
  );
}

/* NEXT make shared-ui imports work from root shared-ui folder when local, and the nested copied folder when deployed
     is this the best solution? investigate the other options a bit more indepth

     i can possibly add a "cp" command in the package.json for the start script. problem here is i am duplicating a ton,
      but that is the cost of having shared components not being pushed to all micro apps

     the other problem is having local development keep track of which was the last version of shared components used in
      deployed app, it will be copying the latest shared components instead of what was deployed last...
     ... perhaps there needs to be a pipeline or step that handles bringing in the latest shared-ui vs using an existing
      one that is committed as part of that micro-app? */

/* i think i have turned my brain into knots here, and there might not actually be a problem????
   we decided already if i am doing work and someone else deploys changes to shared library, i need to have those
   changes pulled in as part of keeping micro app up to date. so it doesn't actually need to keep track of old versions 
   of shared apps.

   the problem here is having a nested copy, because this won't be updated by pulling latest repo. i think this copy if 
   the folder idea is ugly, ideally we somehow have dynamic imports based on env.

   if dynamic imports don't work out, need to somehow have shared components be a separate app or something end get 
   node_modules working for it, problem with that is having hook divs to tie shared component into lol.
    */

/* solution i am thinking now....
   
   have a jsconfig with a baseurl and paths configured. and have the paths be dynamic based on env variable.

   looks like i can't just reference env variables directly into .json, so need a workaround

   it is also possible i can't use jsconfig.json without typescript????
   */

/* another solution is
   
   do i need to cp shared-ui into the micro apps folder? can i copy files in CI 
   (for s3 prep) in such a way that i move package.json and node_modules up one 
   level, and keep shared-ui there as well, and then it's all gravy and i can 
   build it as the one app in CI and push that to s3??
   */
