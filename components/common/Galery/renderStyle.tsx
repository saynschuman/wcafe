export const renderStyle = length => {
  const style4 = `
        .dot-4:nth-child(1):hover ~ .item-slider-list {
          transform: translateX(0px) translateZ(0px);
        }

        .dot-4:nth-child(2):hover ~ .item-slider-list {
          transform: translateX(-25%) translateZ(0px);
        }

        .dot-4:nth-child(3):hover ~ .item-slider-list {
          transform: translateX(-50%) translateZ(0px);
        }

        .dot-4:nth-child(4):hover ~ .item-slider-list {
          transform: translateX(-75%) translateZ(0px);
        }
          `;
  const style3 = `
        .dot-3:nth-child(1):hover ~ .item-slider-list {
          transform: translateX(0px) translateZ(0px);
        }

        .dot-3:nth-child(2):hover ~ .item-slider-list {
          transform: translateX(-33%) translateZ(0px);
        }

        .dot-3:nth-child(3):hover ~ .item-slider-list {
          transform: translateX(-66%) translateZ(0px);
        }
          `;
  const style2 = `
        .dot-2:nth-child(1):hover ~ .item-slider-list {
          transform: translateX(0px) translateZ(0px);
        }

        .dot-2:nth-child(2):hover ~ .item-slider-list {
          transform: translateX(-50%) translateZ(0px);
        }
          `;
  switch (length) {
    case 4:
      return style4;
    case 3:
      return style3;
    case 2:
      return style2;
  }
};
