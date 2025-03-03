import React from 'react'
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { months, sources } from '@/lib/months';


const page = () => {
  const date = new Date();
  const month = months[date.getMonth()];
  return (
    <div className="mx-auto w-[800px]">
      <nav className="p-3 flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Joblog</h1>
        <div className="flex items-center gap-x-4">
          <div className="rounded-full h-6 w-6 bg-white"></div>
          <Button variant="outline">Log out</Button>
        </div>
      </nav>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Track your applications easily
        </h2>
        <div className="flex items-center gap-x-4">
          <div>
            <Select defaultValue={month}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Month"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a month</SelectLabel>
                  {months.map((month, i) => (
                    <SelectItem value={month} key={i}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Add entry</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add entry</DialogTitle>
                  <DialogDescription>
                    Make changes to your job application here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Input
                      id="name"
                      className="col-span-3"
                      placeholder="Job title"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Input
                      id="username"
                      className="col-span-3"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Input
                      id="username"
                      className="col-span-3"
                      placeholder="Salary"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Current Status</SelectLabel>
                            <SelectItem value="Applied">Applied</SelectItem>
                            <SelectItem value="Rejected">Rejected</SelectItem>
                            <SelectItem value="Interview">Interview</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Applied At" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Applied At</SelectLabel>
                            {sources.map((source, i) => (
                              <SelectItem value={source} key={i}>
                                {source}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page