<script>
    let hovering;

    function enter() {
        hovering = true;
    }

    function leave() {
        hovering = false;
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
</style>

<div class="dropdown-wrapper" on:mouseenter={enter} on:mouseleave={leave}>
	<slot name="label" {hovering}></slot>
    <div class:hovering class="resting">
        <slot name="submenu"></slot>
    </div>
</div>
