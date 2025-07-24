import { FormInputData } from "@/app/_interfaces/FormInputData";
import { PAGE_LABELS } from "../pageText";
import { BLANK_MESSAGE, DECIMAL_MESSAGE, DECIMAL_PATTERN, LAT_MAX, LAT_MIN, LOCATION_DECIMAL, LON_MAX, LON_MIN, MIN_NUMBER_MESSAGE, NATURAL_PATTERN, NATURAL_PATTERN_MESSAGE, POSITIVE_INTEGER } from "../validation";
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
      pattern: {
        value: NATURAL_PATTERN,
        message: NATURAL_PATTERN_MESSAGE,
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
      pattern: {
        value: NATURAL_PATTERN,
        message: NATURAL_PATTERN_MESSAGE,
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
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.LOCATION.LAT),
      min: {
        value: LAT_MIN,
        message: MIN_NUMBER_MESSAGE(PAGE_LABELS.SHOP.LOCATION.LAT, LAT_MIN),
      },
      max: {
        value: LAT_MAX,
        message: MIN_NUMBER_MESSAGE(PAGE_LABELS.SHOP.LOCATION.LAT, LAT_MAX),
      },
      pattern: {
        value: DECIMAL_PATTERN(LOCATION_DECIMAL),
        message: DECIMAL_MESSAGE(LOCATION_DECIMAL)
      }
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
      min: {
        value: LON_MIN,
        message: MIN_NUMBER_MESSAGE(PAGE_LABELS.SHOP.LOCATION.LON, LON_MIN),
      },
      max: {
        value: LON_MAX,
        message: MIN_NUMBER_MESSAGE(PAGE_LABELS.SHOP.LOCATION.LON, LON_MAX),
      },
      pattern: {
        value: DECIMAL_PATTERN(LOCATION_DECIMAL),
        message: DECIMAL_MESSAGE(LOCATION_DECIMAL)
      }
    }
  }
]);