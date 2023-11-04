import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&family=Roboto:wght@400;700&display=swap');
 *{
   margin: 0;
   padding:0;
   box-sizing: border-box;
	 font-family: 'Helvetica', sans-serif;
 }


`;

export const Container = styled.div`
	width: 100%;
	max-width: 1440px;
	margin: ${({ margin }) => (margin ? margin : '0 auto')};
	padding: ${({ padding }) => (padding ? padding : '0 15px')};

    @media (max-width: 1430px) {
        max-width: 1140px;
    }

    @media (max-width:1200px) {
        max-width: 960px;

    }
    @media (max-width:992px) {
        max-width: 720px;
    }

    @media (max-width:768px) {
        max-width: 540px;
    }

`;

export const Header = styled.h1`
	color: ${({ color }) => (color ? color : 'blue')};
	text-align: center;
	margin: 2rem;
`;

export const DEFAULT_DIV = styled.div`
	padding: ${({ padding }) => (padding ? padding : '')};
	padding-bottom: ${({ pb }) => (pb ? pb : '')};
	padding-top: ${({ pt }) => (pt ? pt : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : '')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	background-color: ${({ background }) => (background ? background : '')};
`;

export const Section = styled(DEFAULT_DIV)`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 6rem;
`;

export const Row = styled(DEFAULT_DIV)`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
`;

export const Column = styled(DEFAULT_DIV)`
	display: flex;
	flex-flow: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
`;

export const Text = styled.p`
	font-size: 1.5rem;
	font-weight: 400;
	line-height: calc(1.5 * 1.4)

`;
export const TextBold = styled.p`
	font-size: 1.3rem;
	font-weight: 500;
	line-height: calc(1.3 * 1.4)

`;

export const Button = styled.button`
	padding: ${({ padding }) => (padding ? padding : '')};
	padding-bottom: ${({ pb }) => (pb ? pb : '')};
	padding-top: ${({ pt }) => (pt ? pt : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : '')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '5px')};
	background: #001bff;
	color: #fff;
	font-size: ${({ size }) => (size ? size : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	white-space: nowrap;

	&:hover {
		transition: all 0.3s ease-out;
		background-color: #0a1573;
	}
`;

export const Title2 = styled.h1 `
	font-size: 2rem;
	font-weight: 600;
`

export default GlobalStyle;