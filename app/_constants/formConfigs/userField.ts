import { FormInputData } from "@/app/_interfaces/FormInputData";
import { FieldValues, Path } from "react-hook-form";
import { BLANK_MESSAGE, EMAIL_MAX_LENGTH, EMAIL_PATTERN, MAX_LENGTH_MESSAGE, MIN_LENGTH_MESSAGE, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH, PATTERN_MESSAGE } from "../validation";

// メールフィールド作成
export const createEmailField = <T extends FieldValues>(
  labelText: string
): FormInputData<T> => ({
  labelText: labelText,
  type: 'email',
  placeholderText: labelText,
  name: 'email' as Path<T>,
  validationRules: {
    required: BLANK_MESSAGE(labelText),
    maxLength: {
      value: EMAIL_MAX_LENGTH,
      message: MAX_LENGTH_MESSAGE(labelText, EMAIL_MAX_LENGTH)
    },
    pattern: {
      value: EMAIL_PATTERN,
      message: PATTERN_MESSAGE(labelText)
    }
  }
});

// メールフィールド作成
export const createPasswordField = <T extends FieldValues>(
  labelText: string
): FormInputData<T> => ({
  labelText: labelText,
  type: 'password',
  placeholderText: labelText,
  name: 'password' as Path<T>,
  validationRules: {
    required: BLANK_MESSAGE(labelText),
    minLength: {
      value: PASSWORD_MIN_LENGTH,
      message: MIN_LENGTH_MESSAGE(labelText, PASSWORD_MIN_LENGTH)
    },
    maxLength: {
      value: PASSWORD_MAX_LENGTH,
      message: MAX_LENGTH_MESSAGE(labelText, PASSWORD_MAX_LENGTH)
    }
  }
});