import {SPACE} from '../constants/spaces';

export type SpaceKey = keyof typeof SPACE;

export const spacing = {
  // Vertical spacing (margin/padding)
  vertical: (size: SpaceKey) => ({
    marginVertical: SPACE[size],
  }),
  paddingVertical: (size: SpaceKey) => ({
    paddingVertical: SPACE[size],
  }),

  // Horizontal spacing (margin/padding)
  horizontal: (size: SpaceKey) => ({
    marginHorizontal: SPACE[size],
  }),
  paddingHorizontal: (size: SpaceKey) => ({
    paddingHorizontal: SPACE[size],
  }),

  // Individual directions
  top: (size: SpaceKey) => ({
    marginTop: SPACE[size],
  }),
  bottom: (size: SpaceKey) => ({
    marginBottom: SPACE[size],
  }),
  left: (size: SpaceKey) => ({
    marginLeft: SPACE[size],
  }),
  right: (size: SpaceKey) => ({
    marginRight: SPACE[size],
  }),

  // Padding directions
  paddingTop: (size: SpaceKey) => ({
    paddingTop: SPACE[size],
  }),
  paddingBottom: (size: SpaceKey) => ({
    paddingBottom: SPACE[size],
  }),
  paddingLeft: (size: SpaceKey) => ({
    paddingLeft: SPACE[size],
  }),
  paddingRight: (size: SpaceKey) => ({
    paddingRight: SPACE[size],
  }),

  // All sides
  all: (size: SpaceKey) => ({
    margin: SPACE[size],
  }),
  padding: (size: SpaceKey) => ({
    padding: SPACE[size],
  }),
};
