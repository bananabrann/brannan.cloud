<script lang="ts">
  import StackExchange from "svelte-material-icons/StackExchange.svelte";
  import GitHub from "svelte-material-icons/Github.svelte";
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
  import { version } from "$app/environment";
  import Directory from "$lib/components/Directory.svelte";
  import Cloud from "$lib/components/Cloud.svelte";
  import Stars from "$lib/components/Stars.svelte";

  export let socialMediaIconHeight: string = "2rem";
</script>

<main>
  <section>
    <h1><span style={"color: #FBE700"}>brannan</span><span style={"color: lightblue"}>cloud</span></h1>
    <p>
      <span>Hello!</span> This is brannan.cloud, the root domain for all my stuff, hosting everything
      from the website you see here to the TV application in my grandma's living room.
    </p>
    <p>
      I'm a full-time software developer, a prior U.S. Marine, and as is tradition of all people
      that deal with computers, my family's tech support.</p>

    <Directory />

    <div>
      <!-- prettier-ignore -->
      <small>
        Website and systems by me.
        <a
          href="https://github.com/bananabrann/brannan.cloud/blob/main/LICENSE"
          target="_blank">MIT license, 2023.<OpenInNew />
        </a>
      </small>
    </div>

    <div>
      <small>Art assets by various artists. All rights reserved.</small>
    </div>
    <div>
      <small>v{version}</small>
    </div>
  </section>

  <section>
    <article>
      <h3>
        From the Stack Overflow blog: "Code quality: a concern for businesses, bottom lines, and
        empathetic programmers"
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus perferendis iste
        error a excepturi, necessitatibus, consequatur, corporis incidunt veniam perspiciatis
        suscipit expedita soluta? Consequuntur deleniti cum accusantium corrupti nihil odit!
      </p>
    </article>

    <hr />

    <div id="social-media">
      <a href="https://stackexchange.com/users/15325982/bananabrann?tab=accounts" target="_self">
        <StackExchange height={socialMediaIconHeight} width={socialMediaIconHeight} />
      </a>
      <a href="https://github.com/bananabrann" target="_self">
        <GitHub height={socialMediaIconHeight} width={socialMediaIconHeight} />
      </a>
    </div>
  </section>
</main>

<div id="star-board">
  <Stars />
</div>

<div id="cloud-board">
  <Cloud cloud={{ position: "background" }} />
  <Cloud cloud={{ position: "middle" }} />
  <Cloud cloud={{ position: "foreground" }} />
</div>

<style lang="scss">
  main {
    max-width: 850px;
    margin: 0 auto;
    display: flex;
    gap: 1.5rem;

    & > section:nth-child(1) {
      flex: 3;
    }
    & > section:nth-child(2) {
      flex: 1;
      // background-color: aqua;
    }

    // Media query for mobile
    @media (max-width: 705px) {
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  #social-media {
    display: flex;
    gap: 0.65rem;
    justify-content: center;
  }

  #cloud-board {
    position: fixed;
    z-index: -1;
    bottom: 0;
    left: 0;
    min-width: 100vw;
    min-height: 50vh;
  }

  #star-board {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
  }
</style>
