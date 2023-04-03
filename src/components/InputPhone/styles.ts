import { FieldError } from 'react-hook-form';
import InputMask from 'react-input-mask';
import styled, { css } from 'styled-components';
import { colors, typography } from 'styles';

type WrapperProps = {
  $errors?: FieldError;
};

type HintWordProps = {
  $colored?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  border-bottom: 1px solid ${colors.GREY_BLACK_20};

  small {
    position: absolute;
    left: 0;
    top: 60px;
  }

  ${({ $errors }) => {
    return $errors
      ? css`
          border-bottom: 1px solid ${colors.OTHER_NEGATIVE};
        `
      : null;
  }};
`;

export const Label = styled.label`
  position: relative;
  cursor: text;
`;

export const LabelText = styled.span`
  position: absolute;
  bottom: 5px;
  left: 12px;
  ${typography.desktop.BODY_SMALL};
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
`;

export const InputMaskStyled = styled(InputMask)`
  width: 100%;
  height: 56px;
  padding: 12px;
  padding-top: 26px;
  border-radius: 4px;

  ${typography.desktop.BODY_SMALL};
  background-color: ${colors.GREY_BLACK_5};
  transition-duration: 0.3s;
  transition: all 0.2s ease;

  &:not(:placeholder-shown) + span {
    ${typography.desktop.INFO_LARGE}
    color: ${colors.GREY_BLACK_40};
    transform: translate3d(0, -14px, 0);
  }

  &:focus {
    + span {
      ${typography.desktop.INFO_LARGE}
      color: ${colors.GREY_BLACK_40};
      transform: translate3d(0, -14px, 0);
    }
  }
`;

export const HintWord = styled.span<HintWordProps>`
  color: ${({ $colored }) => ($colored ? colors.OTHER_NEGATIVE : colors.GREY_BLACK_40)};
`;
