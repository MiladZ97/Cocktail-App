import { css } from 'lit';
/* App */
export default css `
    @media print {
        * :not(.printout):not(.printout *) {
            display: none;
        }

        .printout {
            display: block;
        }
    }

    .container {
        display: flex;
        flex-direction: column;
    }

    .lists-container {
        display: flex;
        gap: 20px;
    }

    .toast {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        max-width: 300px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        animation: slideIn 0.3s ease-out forwards, fadeOut 0.3s 2.7s ease-out forwards;
      }
      
      @keyframes slideIn {
        from {
          transform: translateX(-50%) translateY(100%);
        }
        to {
          transform: translateX(-50%) translateY(0);
        }
      }
      
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
`;
//# sourceMappingURL=styles.css.js.map