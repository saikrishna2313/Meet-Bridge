"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usernameSchema } from "../../../lib/formSchemas";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import useFetch from '../../../hooks/use-fetch'

import { updateUsername } from "../../../actions/action";
import { BarLoader } from "react-spinners";
const Dashboard = () => {
  const {isLoaded,user}=useUser();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(usernameSchema),
  });

  const { loading, error, fn: fnUpdateUsername } = useFetch(updateUsername);

  const onSubmit = async (data) => {
    await fnUpdateUsername(data.username);
  };
  useEffect(() => {
    setValue("username", user?.username);
    
  }, [isLoaded]);

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Your Profile Link</CardTitle>
            <CardDescription>
              This is your unique link, that you can share with others
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-start items-start">
            <p className="mt-2">{window.location.origin}/</p>   <div>
            <Input {...register("username")} placeholder="username" />
            {
              errors.username&&(
                <p className="text-red-500">{errors.username.message}</p>
              )
              
            }
             {error && (
                <p className="text-red-500 text-sm mt-1">{error?.message}</p>
              )}

              {loading && (
              <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
            )}
            </div>

          </CardContent>
          <CardFooter>
            <Button disabled={loading} type="submit">Update</Button>
          </CardFooter>
        </Card>
      </form>
    </section>
  );
};

export default Dashboard;
