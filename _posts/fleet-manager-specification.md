---
slug: fleet-manager-specification
date: '2019-07-25T09:00:00.000Z'
title: 'Fleet Manager App Specification'
excerpt: 'An indepth look at what will be included in our app'
published: true
tags: ['planning', 'ideas', 'web app']
coverImage: '/assets/blog/fleet-manager-specification/cover.png'
ogImage:
  url: '/assets/blog/fleet-manager-specification/fleet-manager-specification-share.png'
author:
  name: Duncan Brown
  picture: '/assets/blog/authors/duncan-bw.jpeg'
---

This will be a high level look at the requirements for the the app. Including
features and essential user needs.

> This is a contrived example and you must review your own needs before using
> any aspects of this application to ensure any specific requirements are being
> met.

## Problem Statement

When running a busy transport company the business owner and management have an
obligation to ensure their staff are safe and their vehicles comply with any
local regulations.

When using paper records or endless spreadsheets distributed throughout a
company, there are too many opportunities for failure. By using a web
application, business owners and managers can feel assured they are keeping to
their obligations. They can easily check work is being carried out and ensure
their staff complete any outstanding work.

As margins are slim being able to control the costs of their fleet will ensure
they are working as effectiently as possible.

## Scope

- [Users](#users)
- [Vehicles](#vehicles)
- [Services](#services)
- [Issues](#issues)
- [Work Orders](#work-orders)
- [Reminders](#reminders)

## Users

The most basic part of most web applications, but the most important part to get
right. If your users cannot register or sign in your app will fail quickly.

For this application we want business owners or business managers to sign up and
enable them to add their staff members to the application so they can log in and
use the system.

## Vehicles

Users should be able to create records for each of their vehicles, with all the
data needed to help manage the maintenance and ensure they are conforming to the
relevant regulations.

The user should be able to upload an image of the vehicle and generate a QR code
to place in the vehicle to aid identification.

## Services

To keep a reliable fleet of vehicles, the business owner or manager wants to
know that their vehicles are being maintained. The best way to accomplish this
is to carry out regular preventative maintenance services.

Servicing schedules should allow the users to plan for vehicle requirements and
budget for vehicles being off the road.

A calendar view will enable the users to ensure there are enough resources
available at the right time.

A log of servicing will allow the users to check that maintenance tasks are
being carried out in a timely manor.

## Issues

When vehicles are being used regularly, they can develop problems that do not
get noticed during their regular servicing. Any user should be able to create an
issue about a vehicle so the work is carried out quickly and prevent any further
damage to the vehicle.

The issue severity can be a key driver on the urgency of the work to be carried
out and also will mean it sends the notification to the correct person about the
issue. If the issue is severe (accident damage) you may want the business owner
to be notified, but if only a sundry item on the vehicle needs to be changed
then only the maintenance department needs to be notified.

If the vehicle can not be driven because of the issue, this should be able to be
recorded so they can manage resource requirements.

## Work Orders

When an issue has been created, it should create a work order to track the work
carried out. The work order could also track the cost of work or estimates to
allow managers to authorise work over a set value.

## Reminders

Reminders can ensure we keep your vehicles maintained and comply with all local
regulations.

Users should be able to opt in and out of reminders and it should be possible to
create reminders for user groups depending on their role in the business.

## Recap and Up Next

This is just a top level overview of the functionality I want to include in the
application. I will expand on each section as we go through the development of
the app.

Next I will get into some technical aspects of the build, including reviewing
the tech stack requirements and implementation.
