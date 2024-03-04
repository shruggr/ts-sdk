/**
 * The Chain Tracker is responsible for verifying the validity of a given Merkle root
 * for a specific block height within the blockchain, or a set of specified heights.
 *
 * Chain Trackers ensure the integrity of the blockchain by
 * validating new headers against the chain's history. They use accumulated
 * proof-of-work and protocol adherence as metrics to assess the legitimacy of blocks.
 *
 * @interface ChainTracker
 * @function isValidRootForHeight - A method to verify the validity of one or more Merkle roots
 *          for given block height(s).
 *
 * @example
 * const chainTracker = {
 *   isValidRootForHeight: async (root, height) => {
 *     // Implementation to check if a single Merkle root is valid for the specified block height.
 *   },
 *   isValidRootHeightMap: async (map) => {
 *     // Implementation to check if the Merkle roots are valid for the specified block heights.
 *   }
 * };
 */
export default interface ChainTracker {
  isValidRootForHeight: (root: string, height: number) => Promise<boolean>,
  isValidRootHeightMap: (map: Record<string, number>) => Promise<boolean>
}
