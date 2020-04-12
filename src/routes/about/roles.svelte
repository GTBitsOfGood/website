<script>
  import departments from '@contentful-entries/roleDepartment'
  import headerContent from '@contentful-entry/rolesHeader'
  import Department from '../../components/about-us/roles/Department'
  import { stores } from '@sapper/app'
  import { onMount } from 'svelte'

  const { page } = stores()
  $: selectedRole = $page.query.role

  const scrollToDepartment = id => {
    const section = document.getElementById(id)
    setTimeout(() => {
      if (section) section.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  onMount(() => {
    if (location.hash) {
      scrollToDepartment(location.hash.slice(1))
    }
  })
</script>

<style>
  h1 {
    font-size: 80px;
    margin-bottom: 10px;
  }
  .heading {
    background: var(--section-color-yellow);
    padding-bottom: 100px;
  }

  section.banner {
    position: relative;
    max-width: calc(var(--content-max-width) + 100px);
    margin-bottom: 100px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  img.mobile {
    display: none;
    position: absolute;
  }
  img.mobile.left {
    top: 0;
    left: 0;
  }
  img.mobile.right {
    bottom: 0;
    right: 0;
  }
  img.desktop {
    position: absolute;
    display: block;
    height: 80%;
    bottom: 0;
  }
  img.desktop.left {
    left: 0;
  }
  img.desktop.right {
    right: 0;
  }
  section.banner h1,
  section.banner p {
    text-align: center;
  }
  section.banner p {
    font-family: var(--header-font);
    font-size: 26px;
  }
  section.dept-links-container > p {
    font-family: var(--header-font);
    font-size: 36px;
    text-align: center;
  }
  section.dept-links-container {
    background: white;
    padding: 30px;
    max-width: var(--content-max-width);
  }
  .dept-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
  }
  .dept-links button {
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .dept-links button > img {
    height: 200px;
  }
  .dept-links button > p {
    font-family: var(--header-font);
    font-weight: normal;
    font-size: 26px;
    text-align: center;
  }

  @media (max-width: 1100px) {
    section.banner {
      height: 500px;
      margin: 0;
    }
    img.mobile {
      display: block;
    }
    img.desktop {
      display: none;
    }
  }

  @media (max-width: 900px) {
    section.banner h1 {
      margin: 0;
      font-size: 60px;
    }
    section.banner p {
      font-size: 18px;
    }
  }

  @media (max-width: 800px) {
    .heading {
      padding: 0;
    }
    section.dept-links-container > p {
      font-size: 22px;
    }
    .dept-links button {
      margin: 20px;
    }
    .dept-links button > img {
      height: 100px;
    }
    .dept-links button > p {
      font-size: 18px;
    }
  }
</style>

<div class="heading">
  <section class="banner">
    <h1>{headerContent.title}</h1>
    <p>{headerContent.tagline}</p>

    <img
      class="desktop left"
      src={headerContent.desktopBannerImages[0].src}
      alt={headerContent.desktopBannerImages[0].alt} />
    <img
      class="mobile left"
      src={headerContent.mobileBannerImages[0].src}
      alt={headerContent.mobileBannerImages[0].alt} />
    <img
      class="desktop right"
      src={headerContent.desktopBannerImages[1].src}
      alt={headerContent.desktopBannerImages[1].alt} />
    <img
      class="mobile right"
      src={headerContent.mobileBannerImages[1].src}
      alt={headerContent.mobileBannerImages[1].alt} />
  </section>
  <section class="dept-links-container">
    <p>We offer 5 unique roles</p>
    <div class="dept-links">
      {#each departments as { image, name, hash }}
        <button on:click={() => scrollToDepartment(hash)}>
          <img src={image.src} alt={image.alt} />
          <p>{name}</p>
        </button>
      {/each}
    </div>
  </section>
</div>
{#each departments as department, index}
  <Department rightAlign={index % 2 === 1} {...department} {selectedRole} />
{/each}

<svelte:head>
  <title>Our Roles</title>
</svelte:head>
