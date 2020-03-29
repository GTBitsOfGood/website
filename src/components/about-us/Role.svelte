<script>
    export let name = ''
    export let briefDescription = ''
    export let image
    export let hash = ''
</script>

<style>

    div.container {
        margin: 40px;
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
        margin-bottom: 30px;
        text-align: center;
        font-size: 40px;
    }

    p {
        max-width: 300px;
    }

    button {
        margin: 30px auto 0 auto;
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
        display: block;
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
    <p>{@html briefDescription.html}</p>
    <a href='/about/roles#{hash}'>
        <button>
            Learn More
        </button>
    </a>
</div>




