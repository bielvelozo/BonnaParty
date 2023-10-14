import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormSection = styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	/* background-color: rgba(0 , 0 , 0 , 0.5); */

	width:100%;
	height:100%;

	position:fixed; 
	top:0;
	right: 0;
	bottom: 0;
	left:0;
	z-index:999;
`;

export const CLoseButton = styled.button `
	position: absolute;
	background-color: transparent;
    border: none;
    top: -47px;
    right: 163px;
    z-index: 1000;
    color: #ffffff;
	

	&:hover {
		color: #9c27b0
	}

`

export const FormTitle = styled.h1`
	margin-bottom: 24px;
	text-transform: uppercase;
	font-size: 1.05em;
	line-height: 1.2;
	font-weight: 600;
	background-color:${props => props.selected};
	padding: 10px 12px;
	border-radius: 50px;  
	border: 1px solid black
`;

FormTitle.defaultProps ={
	selected: 'trasparent'
}

export const FormSwitch = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-bottom: 10px
`

export const FormContainer = styled.div`
	display: flex;
`;
export const FormColumn = styled.div`
	/* margin-bottom: 15px; */
	padding: 50px;
	background: white;
	
	border: 1px solid #000;
	/* padding: ${({ small }) => (small ? '0 50px' : '0 15px')}; */
	flex: 1;
	max-width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		
		flex-basis: 100%;
	}

	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	position:relative;
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;

`;

export const FormWrapper = styled.form`
	/* max-width: 540px; */
	padding-top: 0;
	width: 100%;
`;

export const FormMessage = styled(motion.div)`
	color: #333;
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 1.4rem;

	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.76rem;
	margin-bottom: 0.2rem;
	color: #afafaf;
`;
export const FormImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
export const FormImg = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

export const FormButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 1.5rem;
	white-space: nowrap;
	/* color: #fff; */
	outline: none;
	width: 100%;
	font-size: 1.2rem;
	padding: 3px 13px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: black;
	}
`;