<script>
    import Hoverable from './Hoverable.svelte'
    export let hovering
</script>

<style>
    .show {
        display: block;
    }

    div {
        display: none;
    }
</style>


<Hoverable let:hovering={hovering}>
    <slot name="label"></slot>
    <div class:show={hovering}>
        <slot name="submenu"></slot>
    </div>
</Hoverable>

