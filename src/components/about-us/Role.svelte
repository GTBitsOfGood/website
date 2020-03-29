<script>
    export let name = ''
    export let briefDescription = ''
    export let image
    export let hash = ''
</script>

<style>

    a {
        text-decoration: unset;
        font-weight: unset;
        outline: none;
    }

    .container {
        margin: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cutoff {
        height: 200px;
        overflow: hidden;
        transition-property: transform;
        transition-duration: 0.2s;
    }
    img {
        height: 200%;
    }

    h3 {
        margin-top: 20px;
        margin-bottom: 0px;
        text-align: center;
        font-size: 40px;
    }

    p {
        max-width: 300px;
        margin-bottom: 30px;
    }

    .learnMore {
        border-radius: 12px;
        font-weight: normal;
        letter-spacing: inherit;
        text-align: center;
        color: #333;
        font-size: 18px;
        padding: 8px 80px;
        border: 2px solid #333;
        transition-property: background-color, color;
        transition-duration: 0.2s;
        margin-top: auto;
        display: block;
    }

    .container:hover .cutoff {
        transform: scale(1.2) translateY(-15px);
    }

    .container:hover .learnMore {
        background-color: #333;
        color: white;
    }

</style>

<a href='/about/roles#{hash}' class='container'>
    <div class='cutoff'>
        <img src={image.src} alt={image.alt} />
    </div>
    <h3>{name}</h3>
    <p>{@html briefDescription.inlineHtml}</p>
    <div class='learnMore'>Learn More</div>
</a>
