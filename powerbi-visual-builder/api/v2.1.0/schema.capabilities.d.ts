/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ValueType =
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    };
/**
 * dataMapping - Defines how data is mapped to data roles
 */
export type DataViewMapping =
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    };
/**
 * Specifies the default sorting behavior for the visual
 */
export type Sorting = {
  [k: string]: any;
};

export interface SchemaCapabilities {
  /**
   * Defines data roles for the visual
   */
  dataRoles?: DataRole[];
  /**
   * Defines data mappings for the visual
   */
  dataViewMappings?: DataViewMapping[];
  objects?: Objects;
  tooltips?: Tooltips;
  sorting?: Sorting;
  drilldown?: Drilldown;
  /**
   * Indicates whether the visual should show a default title
   */
  suppressDefaultTitle?: boolean;
  /**
   * Allows the visual to receive focus through keyboard navigation
   */
  supportsKeyboardFocus?: boolean;
  /**
   * Tells the host to include highlight data
   */
  supportsHighlight?: boolean;
  /**
   * Indicates the action requested from the host when this visual enters Advanced Edit mode.
   */
  advancedEditModeSupport?: number;
}
/**
 * dataRole - Defines the name, displayName, and kind of a data role
 */
export interface DataRole {
  /**
   * The internal name for this data role used for all references to this role
   */
  name: string;
  /**
   * The name of this data role that is shown to the user
   */
  displayName: string;
  /**
   * The localization key for the displayed name in the stringResourced file
   */
  displayNameKey?: string;
  /**
   * The kind of data that can be bound do this role
   */
  kind: "Grouping" | "Measure" | "GroupingOrMeasure";
  /**
   * A description of this role shown to the user as a tooltip
   */
  description?: string;
  /**
   * The localization key for the description in the stringResourced file
   */
  descriptionKey?: string;
  /**
   * Defines the preferred type of data for this data role
   */
  preferredTypes?: ValueType[];
  /**
   * Defines the required type of data for this data role. Any values that do not match will be set to null
   */
  requiredTypes?: ValueType[];
}
/**
 * A list of unique property groups
 */
export interface Objects {
  /**
   * Settings for a group of properties
   *
   * This interface was referenced by `Objects`'s JSON-Schema definition
   * via the `patternProperty` "^[\w\s-]+$".
   */
  [k: string]: {
    /**
     * The name shown to the user to describe this group of properties
     */
    displayName?: string;
    /**
     * The localization key for the displayed name in the stringResourced file
     */
    displayNameKey?: string;
    /**
     * A description of this object shown to the user as a tooltip
     */
    description?: string;
    /**
     * The localization key for the description in the stringResourced file
     */
    descriptionKey?: string;
    /**
     * A list of unique properties contained in this group
     */
    properties?: {
      [k: string]: ObjectPropertySettings;
    };
  };
}
/**
 * Settings for a property
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[\w\s-]+$".
 */
export interface ObjectPropertySettings {
  /**
   * The name shown to the user to describe this property
   */
  displayName?: string;
  /**
   * The localization key for the displayed name in the stringResourced file
   */
  displayNameKey?: string;
  /**
   * A description of this property shown to the user as a tooltip
   */
  description?: string;
  /**
   * The localization key for the description in the stringResourced file
   */
  descriptionKey?: string;
  /**
   * Text to display if the field is empty
   */
  placeHolderText?: string;
  /**
   * Indicates whether the Format Painter should ignore this property
   */
  suppressFormatPainterCopy?: boolean;
  /**
   * Describes what type of property this is and how it should be displayed to the user
   */
  type?: {
    [k: string]: any;
  };
  /**
   * Describes substitution rule that replaces property object, described inside the rule, to current property object that contains this rule
   */
  rule?: {
    /**
     * The name of role. If this role is set, the substitution will be applied
     */
    inputRole?: string;
    /**
     * Describes what exactly is necessary to replace
     */
    output?: {
      /**
       * The name of property object that will be replaced
       */
      property?: string;
      /**
       * The array of selector names. Usually, it contains only one selector -- 'Category'
       */
      selector?: string[];
      [k: string]: any;
    };
    [k: string]: any;
  };
}
/**
 * Instructs the host to include tooltips ability
 */
export interface Tooltips {
  /**
   * Instructs the host what tooltip types to support
   */
  supportedTypes?: {
    /**
     * Instructs the host to support showing default tooltips
     */
    default?: boolean;
    /**
     * Instructs the host to support showing canvas tooltips
     */
    canvas?: boolean;
    [k: string]: any;
  };
  roles?: string[];
  [k: string]: any;
}
/**
 * Defines the visual's drill capability
 */
export interface Drilldown {
  /**
   * The drillable role names for this visual
   */
  roles?: string[];
  [k: string]: any;
}
