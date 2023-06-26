import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.5;
      font-weight: 400;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }
    
    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${({ theme }): string => theme['purple']};
    }
    
    body{
        background-color: ${({ theme }): string => theme['bg-color']};
        color: ${({ theme }): string => theme['text-color']};
        --webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button{
        font: 400 1rem 'Inter', sans-serif;
        
    }

    @media (max-width: 768px) {
      html {
        font-size: 87.5%;
      }
    }

    ::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      /* background-color: ${({ theme }): string => theme['purple']}; */
      border-radius: 999px;
    }
`;
