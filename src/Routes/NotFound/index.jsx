import React from "react";
import { LayoutHelmet } from "../../Layouts/HelmetLayout";

export default function NotFound() {
  return (
    <LayoutHelmet
        title='Not Found :( | 404'
        description='Apparently you misspelled the url because there is nothing here'
    >
      <div>404</div>
    </LayoutHelmet>
  );
}
