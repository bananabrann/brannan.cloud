<script>
  import TagOutline from "svelte-material-icons/TagOutline.svelte";
</script>

<section>
  <article class="alt1">
    <a href="/">
      <h3>brannan.cloud</h3>
    </a>
    <p>Root website.</p>
  </article>

  <article class="alt2">
    <a href="https://files.brannan.cloud">
      <h3>files.brannan.cloud</h3>
    </a>
    <p>
      File hosting for myself. Private access only (You're still gonna' click it though, aren't
      you?).
    </p>
  </article>

  <article class="alt1">
    <a href="https://tv.brannan.cloud" target="_self">
      <h3>tv.brannan.cloud</h3>
    </a>
    <p>
      TV application for my grandma, making it simple and clear for her to select what she wants to
      watch. Also has a chatbot tailored to telling her what shows are on what streaming service.
    </p>
  </article>

  <article class="alt2">
    <a href="https://careers.state.gov"><h3>vsfs.state.gov<TagOutline width={"25px"} /></h3></a>
    <p>
      Remote internship application site. College students browse and apply to internships posted by
      project mentors.<br /> In 2022, vsfs.state.gov was absorbed by careers.state.gov.
    </p>
  </article>

  <article class="alt1">
    <h3>tims</h3>
    <p>
      Backend system for <a href="https://www.state.gov/tias/">state.gov/tias</a>, a place where
      treaties and agreements of the United States are publicly available.
    </p>
  </article>

  <article class="alt2">
    <h3>debbie</h3>
    <p>
      Debbie the Decibel Robot, a simple robot that detects sounds around it, then calculates and
      displays the decibels.
    </p>
  </article>

  <article class="alt1">
    <a href="https://github.com/geoffrich/svelte-adapter-azure-swa">
      <h3>geoffrich/svelte-adapter-azure-swa</h3></a
    >
    <p>
      SvelteKit adapter for Azure Static Web Apps. I've only contributed a few lines, but I love the
      work they're doing on this repo.
    </p>
  </article>
</section>

<style lang="scss">
  $gradient-pink: rgb(148, 54, 87);
  $gradient-grey: rgb(90, 90, 90);

  section {
    margin: 0 auto;
    max-width: 850px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    border-radius: 12px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(
      to bottom,
      rgba($gradient-pink, 0.25),
      rgba($gradient-grey, 0.25)
    );

    // If the browser supports it, give it a fancy blur. If no support available,
    // default to the background-image linear-gradient.
    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      backdrop-filter: blur(8px);
    }

    // Give a little bit of margin when screen width is small.
    @media (max-width: 830px) {
      margin: 0 14px;
    }
  }

  article {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 15px;

    > * {
      flex-basis: 0;
      flex-grow: 1;
    }

    h3 {
      word-break: break-word;
    }
  }

  .alt1 {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 10px;
  }

  .alt2 {
    padding: 0 10px;
  }
</style>
