// The clouds on the back of the page.
export interface Cloud {
  position: "background" | "foreground" | "middle";
}

// Type guard for Cloud, returning true if the object is a Cloud.
export function isACloud(object: any): object is Cloud {
  return (
    typeof object.position === "string" &&
    ["background", "foreground", "middle"].includes(object.position)
  );
}
