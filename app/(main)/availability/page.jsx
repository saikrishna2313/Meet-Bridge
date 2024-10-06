import React from "react";
import AvailabilityForm from "../../maincomponents/AvailibilityForm";
import { getUserAvailability } from "@/actions/action";
import {defaultAvailability} from '../../../lib/data'


export default async function AvailabilityPage() {
  const availability = await getUserAvailability();

  return <AvailabilityForm initialData={availability || defaultAvailability} />;
}