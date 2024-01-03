import { css, styled } from "styled-components";

const ButtonPage = ({ children, size, variant, ...rest }) => {
  return (
    <>
      <Button size={size} variant={variant} {...rest}>
        {children}
      </Button>
    </>
  );
};
export default ButtonPage;
const variantCSS = {
  primary: css`
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
  `,
};
const sizeCSS = {
  small: css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `,
  large: css`
    width: 98px;
    height: 98px;
    border-radius: 50%;
  `,
};

//
const Button = styled.button`
  /* button reset CSS */
  border: none;
  outline: none;
  padding: 0;
  margin-left: 10px;
  margin: 0 auto;
  /* button css 중 공통되는 부분 (교집합) */
  cursor: pointer;
  transition: all 0.6s;
  /* 위에 custom한 css를 적용하기 위한 부분 */
  /* props로 전달받아 각각 요소를 조합해 조립하는 방식 */
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
`;
