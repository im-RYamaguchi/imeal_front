import { FormInputData } from "@/app/_interfaces/FormInputData";
import { PAGE_LABELS } from "../pageText";
import { BLANK_MESSAGE, POSITIVE_INTEGER, POSITIVE_INTEGER_MESSAGE } from "../validation";
import { FieldValues, Path } from "react-hook-form";

// 飲食店のフォーム要素作成
export const createShopFields = <T extends FieldValues>(): FormInputData<T>[] => ([
  // url
  {
    labelText: PAGE_LABELS.SHOP.URL,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.URL,
    name: 'url' as Path<T>,
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.URL)
    }
  },
  // 店名
  {
    labelText: PAGE_LABELS.SHOP.NAME,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.NAME,
    name: 'name' as Path<T>,
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.NAME)
    }
  },
  // 住所
  {
    labelText: PAGE_LABELS.SHOP.ADDRESS,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.ADDRESS,
    name: 'address' as Path<T>,
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.ADDRESS)
    }
  },

  // 拠点からの距離
  {
    labelText: PAGE_LABELS.SHOP.DISTANCE,
    type: 'number',
    placeholderText: PAGE_LABELS.SHOP.DISTANCE,
    name: 'distance' as Path<T>,
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.DISTANCE),
      min: {
        value: POSITIVE_INTEGER,
        message: POSITIVE_INTEGER_MESSAGE
      }
    }
  },

  // 拠点から徒歩何分
  {
    labelText: PAGE_LABELS.SHOP.MINUTES,
    type: 'number',
    placeholderText: PAGE_LABELS.SHOP.MINUTES,
    name: 'minutes' as Path<T>,
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.MINUTES),
      min: {
        value: POSITIVE_INTEGER,
        message: POSITIVE_INTEGER_MESSAGE
      }
    }
  },
  // 緯度
  {
    labelText: PAGE_LABELS.SHOP.LOCATION.LAT,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.LOCATION.LAT,
    name: 'location.lat' as Path<T>,
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.LOCATION.LAT)
    }
  },

  // 経度
  {
    labelText: PAGE_LABELS.SHOP.LOCATION.LON,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.LOCATION.LON,
    name: 'location.lon' as Path<T>,
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.LOCATION.LON),
    }
  }
]);