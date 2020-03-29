<script>
    export let name = ''
    export let briefDescription = ''
    export let image
    export let hash = ''
</script>

<style>

    div.container {
        margin: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cutoff {
        height: 200px;
        overflow: hidden;
    }
    img {
        height: 400px;
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

    a {
        margin-top: auto;
        display: block;
    }

    button {
        border-radius: 12px;
        font-weight: normal;
        letter-spacing: inherit;
        text-align: center;
        color: #333;
        font-size: 18px;
        padding: 8px 80px;
        border: 2px solid #333;
        transition-property: transform, background-color, color, box-shadow;
        transition-duration: 0.2s;
        
    }
    button:hover {
        transform: translateY(-10px);
        background-color: #333;
        color: white;
        box-shadow: var(--shadow-hover);
    }
</style>

<div class='container'>
    <div class='cutoff'>
        <img src={image.src} alt={image.alt} />
    </div>
    <h3>{name}</h3>
    <p>{@html briefDescription.inlineHtml}</p>
    <a href='/about/roles#{hash}'>
        <button>
            Learn More
        </button>
    </a>
</div>
