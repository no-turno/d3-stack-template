const css = String.raw;

export const globalCss = css`
    * { 
        box-sizing: border-box;
    }

    html {
        background-color: hsla(218.81, 26.156%, 13.676%);
        color: white;
        font-family: 'Roboto', sans-serif;
    }

    body { 
        margin: 0;
    }

    a {
        all: unset;

        &:hover {
            cursor: pointer;
        }
    }

    .container {
        margin:  0 auto;
        padding: 1.4rem;
    }

    .navigation {
        display: flex;
        gap: 1rem;
    }

    .active {
        color: hsla(140.53, 60.241%, 75.345%)
    }
`;
