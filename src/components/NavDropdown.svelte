<script>
    import { stores } from '@sapper/app';

    export let mobile
    export let href
    export let shadow

    const { page } = stores();

    let currentPath
    page.subscribe(({ path, params, query }) => {
        currentPath = path
    })

    let hovering;
    let expanded = false;
    function enter() {
        hovering = true;
    }

    function leave() {
        hovering = false;
    }

    function click() {
        expanded = !expanded
    }

    function checkMobile(e) {
    if (window.innerWidth <= 800) e.preventDefault()
  }
</script>

<style>
    li {
        list-style-type: none;
        margin-right: 6rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .shadow {
        box-shadow: var(--shadow);
    }

    .dropdown-wrapper {
        height: 100%;
    }

    .resting {
        opacity: 0;
        pointer-events: none;
        transform: translate3d(0, -20px, 0);
        transition: transform .75s cubic-bezier(.47,.42,0,.99), opacity .75s cubic-bezier(.47,.42,0,.99);
    }

    .hovering {
        opacity: 1;
        pointer-events: auto;
        transform: translate3d(0,0,0);
    }

    .submenu {
        position: absolute;
        margin-left: -2rem;
        min-width: 125px;
    }

    .submenu>ul {
        background: var(--backing-pink-pronounced);
        padding: 1.5rem 2rem;
    }

    .has-sub {
        display: flex;
        align-items: center;
    }

    .has-sub:after {
        content: '';
        display: inline-block;
        width: 5px;
        height: 5px;
        border: 2.5px solid;
        border-right: 0;
        border-bottom: 0;
        margin-left: 10px;
        transform: rotate(-135deg);
        transition: border-color .2s cubic-bezier(.47,.42,0,.99),transform .65s cubic-bezier(.47,.42,0,.99);
    }

    .has-sub.selected:after {
        border-color: var(--primary);
    }

    .has-sub.dropped:after {
        transform: rotate(45deg);
    }

    @media (max-width: 800px) {
        a {
            font-size: 3rem;
            padding: 3rem;
            justify-content: space-between;
        }

        li {
            width: 100%;
            margin: 0;
            padding: 2rem;
            height: auto;
            border-bottom: 2px solid var(--backing-pink-pronounced);
        }

        .dropdown-wrapper {
            width: 100%;
            height: auto;
        }
        .resting {
            max-height: 0;
            opacity: 1;
            pointer-events: auto;
            transform: none;
            overflow: hidden;
            transition: max-height .75s cubic-bezier(.47,.42,0,.99);
        }

        .hovering {
            opacity: 1;
        }

        .expanded {
            max-height: 40rem; /* hopefully there are not more drop downs than 40rem worth*/
        }

        .submenu {
            position: static;
            margin-left: 0;
            min-width: none;
            border-bottom: 2px solid var(--backing-pink-pronounced);
            padding: 0 4rem;
        }

        .submenu>ul {
            position: static;
            opacity: 1;
            overflow: auto;
            padding: 1.5rem 2rem;
            height: auto;
            background: inherit;
        }
    }
</style>

<div class="dropdown-wrapper" on:mouseenter={enter} on:mouseleave={leave} on:click={click}>
    <li>
        <a 
          class:selected={currentPath === '/about'} 
          class:dropped={mobile ? expanded : hovering} 
          class="has-sub" 
          {href}
          on:click={checkMobile}
        >
        <slot name="label"></slot>
        </a>
    </li>
    <div class:hovering class:expanded class="resting">
        <div class="submenu" class:shadow>
            <ul>
              <slot name="submenu"></slot>
            </ul>
          </div>
    </div>
</div>
