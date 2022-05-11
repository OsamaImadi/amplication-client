import { InteractionSection as TInteractionSection } from "../api/interactionSection/InteractionSection";

export const INTERACTIONSECTION_TITLE_FIELD = "pictureTitle";

export const InteractionSectionTitle = (
  record: TInteractionSection
): string => {
  return record.pictureTitle || record.id;
};
