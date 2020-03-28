<script>
    import { removeWrapperPTag } from '../../contentHelpers'

    export let text
</script>
<style>
    .container {
        height: 40px;
        margin-left: 20px;
        line-height: 40px;
        overflow: hidden;
    }

    .bullet {
        width: 12.5px;
        height: 12.5px;
        margin-top: 3.5px;
        display: inline-block;
        vertical-align: middle;
        background-color: var(--primary-red);
    }

    p {
        margin: 0 0 0 10px;
        display: inline-block;
        vertical-align: middle;
        font-family: var(--body-font);
        font-size: inherit;
    }

</style>

<div class="container">
    <span class="bullet" />
    <p>{@html removeWrapperPTag(text.html)}</p>
</div>