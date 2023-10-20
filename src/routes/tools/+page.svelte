<section>
  <article>
    <a href="/">
      <h3>brannan.cloud</h3>
    </a>
    <p>Root website.</p>
  </article>

  <article>
    <a href="https://files.brannan.cloud">
      <h3>files.brannan.cloud</h3>
    </a>
    <p>
      File hosting for myself. Private access only (You're still gonna' click it though, aren't
      you?).
    </p>
  </article>

  <article>
    <a href="https://tv.brannan.cloud" target="_self">
      <h3>tv.brannan.cloud</h3>
    </a>
    <p>
      TV application for my grandma, making it simple and clear for her to select what she wants to
      watch. Also has a chatbot tailored to telling her what shows are on what streaming service.
    </p>
  </article>
</section>

<style lang="scss">
  section {
    // margin: auto 4rem;
    margin: 0 auto;
    max-width: 850px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: space-around;
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
  }
</style>
