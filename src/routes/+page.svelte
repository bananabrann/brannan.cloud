<script lang="ts">
  import StackExchange from "svelte-material-icons/StackExchange.svelte";
  import GitHub from "svelte-material-icons/Github.svelte";
  import { version } from "$app/environment";

  export let socialMediaIconHeight: string = "2rem";
</script>

<main>
  <section>
    <p>
      <span>Hello!</span> This is brannan.cloud, the root domain for all my services, hosting everything
      from the website you see here to the TV application in my grandma's living room.
    </p>
    <p>
      I'm a full-time software developer, a prior U.S. Marine, and as is tradition of all people
      that doing with computers, my family's tech support.
    </p>
    <p>
      This site is a little ugly right now, but I'm working on it. I'm currently moving it over to
      SvelteKit to match the rest of my projects and to hopefully make it a little easier to
      maintain.
    </p>

    <p><a href="https://github.com/bananabrann" target="_blank">@bananabrann</a></p>
    <p>Software Developer</p>
    <br />

    <small>Website and systems by me. MIT license, 2023.</small>
    <small>Art assets by various artists. All rights reserved.</small>
    <small>v{version}</small>
  </section>

  <section>
    <article>
      <h3>Power Apps failed as an enterprise app, but upper management still buys the hype</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus quos illum! Quo odio
        quisquam earum perspiciatis, provident autem qui molestias fuga, maxime fugiat aliquam
        voluptas nisi officiis voluptatibus fugit?
      </p>
    </article>
    <article>
      <h3>Code quality: a concern for businesses, bottom lines, and empathetic programmers</h3>
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
  }

  #social-media {
    display: flex;
    gap: 0.65rem;
    justify-content: center;
  }
</style>
