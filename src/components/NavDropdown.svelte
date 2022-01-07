<script>
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
</script>

<style>
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

    @media (max-width: 800px) {
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
    }
</style>

<div class="dropdown-wrapper" on:mouseenter={enter} on:mouseleave={leave} on:click={click}>
	<slot name="label" {hovering} {expanded}></slot>
    <div class:hovering class:expanded class="resting">
        <slot name="submenu"></slot>
    </div>
</div>
