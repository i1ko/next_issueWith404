import React from 'react';
import {LocaleT} from "@/constants/types";

export default function OtherPage({
  params: { locale },
}: {
  params: { locale: LocaleT };
}) {
  return (
    <main className="bg-page-aboutPrim overflow-hidden">
      <h1>
        {locale}
      </h1>
    </main>
  );
}
